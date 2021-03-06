from django.contrib.auth import get_user_model
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
User = get_user_model()



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_users(request):
        users = User.objects.all()
        serializer = RegistrationSerializer(users, many=True)
        return Response(serializer.data)


@api_view(['GET', 'DELETE'])
@permission_classes([AllowAny])
def get_user_by_id(request, pk):
    user = get_object_or_404(User, pk=pk)
    if(request.method == 'GET'):
        serializer = RegistrationSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif(request.method == 'DELETE'):
        user.delete()
        return Response(status=status.HTTP_200_OK)


