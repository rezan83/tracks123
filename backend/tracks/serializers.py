from .models import Shipments
from rest_framework import serializers


class ShipmentsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shipments
        fields = '__all__'
