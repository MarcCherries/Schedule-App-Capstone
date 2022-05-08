from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework import status
from .models import Friends
from authentication.models import User
from .serializers import FriendsSerializer




@api_view(['GET', 'PATCH'])
@permission_classes([AllowAny])
def get_all_friends(request):
    type_param = request.query_params.get('username')
    friend_param = request.query_params.get('pk')
    current_user = Friends.objects.filter(user__username=type_param).first()
    if (type_param):
        if (request.method == 'GET'):
            serializer = FriendsSerializer(current_user)
            return Response(serializer.data)

        elif (request.method == 'PATCH'):
            current_user.friends.add(friend_param)
            serializer = FriendsSerializer(current_user, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET','PUT', 'DELETE'])
@permission_classes([AllowAny])
def get_friend_by_user(request, pk):
    friends = get_object_or_404(Friends, pk=pk)
    if (request.method == 'GET'):
        serializer = FriendsSerializer(friends)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif (request.method == 'PUT'):
        serializer = FriendsSerializer(friends, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
