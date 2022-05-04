from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework import status
from .models import Event
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


@api_view(['GET','PUT', 'DELETE'])
@permission_classes([AllowAny])
def get_event_detail(request, pk):
    event = get_object_or_404(Event, pk=pk)
    if (request.method == 'GET'):
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