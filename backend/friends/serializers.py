
from rest_framework import serializers
from .models import Friends

from authentication.models import User

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friends
        fields = ['id', 'friends', 'user']
        depth = 1

        user = serializers.IntegerField(write_only=True)
        friends = serializers.ManyRelatedField(write_only=True)