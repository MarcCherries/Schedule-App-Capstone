from rest_framework import serializers
from .models import Reputation

class ReputationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reputation
        fields = ['id', 'user', 'event', 'eligible_voters']

        depth = 1