from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework import status
from .models import Friends
from authentication.models import User
from .serializers import FriendsSerializer




@api_view(['GET', 'POST', 'PATCH'])
@permission_classes([AllowAny])
def get_all_friends(request):
    type_param = request.query_params.get('id')
    friend_param = request.query_params.get('pk')
    current_user = Friends.objects.filter(user__id=type_param).first()
    user_friends = User.objects.filter(id=type_param).first()
  
    if (type_param):
        if (request.method == 'GET'):
            serializer = FriendsSerializer(current_user)
            return Response(serializer.data)

        elif (request.method == 'PATCH'):
            current_user.pending.remove(friend_param)
            current_user.friends.add(friend_param)

            serializer = FriendsSerializer(current_user, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        elif (request.method == 'POST'):
            serializer = FriendsSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save(user=user_friends)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif (request.method == 'GET'):
        friends = Friends.objects.all()
        serializer = FriendsSerializer(friends, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


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

    elif (request.method == 'DELETE'):
        friends.delete()
        return Response(status=status.HTTP_200_OK)

@api_view(['GET', 'POST', 'PATCH'])
@permission_classes([AllowAny])
def set_friend_pending(request):
    type_param = request.query_params.get('id')
    friend_param = request.query_params.get('pk')
    current_user = Friends.objects.filter(user__id=type_param).first()
    user_friends = User.objects.filter(id=type_param).first()

    if (type_param):


        if (request.method == 'PATCH'):
            current_user.pending.add(friend_param)

            serializer = FriendsSerializer(current_user, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST', 'PATCH'])
@permission_classes([AllowAny])
def set_friend_decline(request):
    type_param = request.query_params.get('id')
    friend_param = request.query_params.get('pk')
    current_user = Friends.objects.filter(user__id=type_param).first()
    user_friends = User.objects.filter(id=type_param).first()

    if (type_param):


        if (request.method == 'PATCH'):
            current_user.pending.remove(friend_param)
            current_user.denied.add(friend_param)

            serializer = FriendsSerializer(current_user, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
