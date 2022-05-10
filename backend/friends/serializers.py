
from rest_framework import serializers
from .models import Friends

from authentication.models import User

class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friends
        fields = ['id', 'friends', 'user']
     
    
   
    