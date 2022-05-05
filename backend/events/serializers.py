
from rest_framework import serializers
from .models import Event
from locations.models import Location
from authentication.models import User

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'user','location',  'date_time', 'event_type', 'event_description', 'event_specialInstructions', 'experience_level', ]
        depth = 1

        user = serializers.IntegerField(write_only=True)
        location = serializers.IntegerField(write_only=True)


