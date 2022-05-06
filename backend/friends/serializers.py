
from rest_framework import serializers
from .models import Friends

from authentication.models import User

class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friends
        fields = ['id', 'friends','friends_id', 'user', 'user_id']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)
    friends_id = serializers.IntegerField(write_only=True)