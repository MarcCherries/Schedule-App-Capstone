from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework import status
from .models import Event
from authentication.models import User
from .serializers import EventSerializer


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_all_events(request):
    if (request.method == 'GET'):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif (request.method == 'POST'):
        serializer = EventSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET','PUT', 'DELETE', 'PATCH'])
@permission_classes([AllowAny])
def get_event_detail(request, pk):
    event = get_object_or_404(Event, pk=pk)
 
    event_objs = Event.objects.filter(user__id=pk)
    user_param = request.query_params.get('id')
    userToAdd = User.objects.filter(id=user_param).first()
    if (user_param):
      
            
        if (request.method == 'PATCH'):
            event.user.add(userToAdd)
            print(userToAdd)
            serializer = EventSerializer(event, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif (request.method == 'GET'):
            serializer = EventSerializer(event)
            return Response(serializer.data, status=status.HTTP_200_OK)
    elif (request.method == 'PUT'):
        serializer = EventSerializer(event, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    elif (request.method == 'DELETE'):
        event.delete()
        return Response(status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_all_events_by_user_id(request):
    user_param = request.query_params.get('id')
    events = Event.objects.filter(user__id=user_param)
    if (user_param):

        if (request.method == 'GET'):
            
            serializer = EventSerializer(events, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
