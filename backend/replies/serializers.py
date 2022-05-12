from rest_framework import serializers
from .models import Reply

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id', 'comment','comment_id' ,'user', 'user_id','reply_text']

        depth =1

    comment_id = serializers.IntegerField(write_only=True)
    user_id = serializers.IntegerField(write_only=True)