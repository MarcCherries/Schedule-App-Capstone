from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework import status
from .models import Comment
from .serializers import CommentSerializer



@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_all_comments(request):
    if (request.method == 'GET'):
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif (request.method == 'POST'):
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET','PUT', 'DELETE'])
@permission_classes([AllowAny])
def get_comment_detail(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    if (request.method == 'GET'):
        serializer = CommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif (request.method == 'PUT'):
        serializer = CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    elif (request.method == 'DELETE'):
        comment.delete()
        return Response(status=status.HTTP_200_OK)
