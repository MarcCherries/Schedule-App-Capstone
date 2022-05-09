
from django.shortcuts import render
from .models import Location
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import LocationSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_all_locations(request):
    param = request.query_params.get('keyword')
    if (param):
        location_results = Location.objects.filter(location_name__contains=param)
        serializer = LocationSerializer(location_results, many=True)
        return Response(serializer.data)
    if (request.method == 'GET'):
        locations = Location.objects.all()
        serializer = LocationSerializer(locations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif (request.method == 'POST'):
        serializer = LocationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET','PUT', 'DELETE'])
@permission_classes([AllowAny])
def get_location_detail(request, pk):
    location = get_object_or_404(Location, pk=pk)
    if (request.method == 'GET'):
        serializer = LocationSerializer(location)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif (request.method == 'PUT'):
        serializer = LocationSerializer(location, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif (request.method == 'DELETE'):
        location.delete()
        return Response(status=status.HTTP_200_OK)


