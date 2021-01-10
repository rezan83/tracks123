from django.shortcuts import render

# Create your views here.
from .models import Shipments
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ShipmentsSerializer


class ShipmentsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Shipments.objects.all().order_by('last_updated_timestamp')
    serializer_class = ShipmentsSerializer
    # permission_classes = [permissions.IsAuthenticated]
