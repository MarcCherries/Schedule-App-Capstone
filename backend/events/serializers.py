
from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'date_time', 'event_type', 'event_description', 'event_specialInstructions', 'experience_level', 'user_id', 'location_id']