from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework import status
from .models import Reply
from .serializers import ReplySerializer



@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_all_replies(request):
    if (request.method == 'GET'):
        replies = Reply.objects.all()
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif (request.method == 'POST'):
        serializer = ReplySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET','PUT', 'DELETE'])
@permission_classes([AllowAny])
def get_reply_detail(request, pk):
    reply = get_object_or_404(Reply, pk=pk)
    if (request.method == 'GET'):
        serializer = ReplySerializer(reply)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif (request.method == 'PUT'):
        serializer = ReplySerializer(reply, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    elif (request.method == 'DELETE'):
        reply.delete()
        return Response(status=status.HTTP_200_OK)