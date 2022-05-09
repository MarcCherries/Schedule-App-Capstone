from django.forms import IntegerField
from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'comment_text', 'user','user_id', 'event','event_id']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)
    event_id = serializers.IntegerField(write_only=True)