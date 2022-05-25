
from rest_framework import serializers
from .models import Event
from locations.models import Location
from authentication.models import User

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'user', 'user_id', 'denied', 'pending','location','location_id','date', 'time', 'event_type', 'event_description', 'event_specialInstructions', 'experience_level', 'isPrivate']
        depth = 1


    user_id = serializers.IntegerField(read_only=True)
    location_id = serializers.IntegerField(write_only=True)

 
   


