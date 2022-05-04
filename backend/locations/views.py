from django.shortcuts import render
from .models import Location
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import LocationSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_locations(request):
    locations = Location.objects.all()
    serializer = LocationSerializer(locations, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


