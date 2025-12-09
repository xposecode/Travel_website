from rest_framework_mongoengine import serializers
from .models import Destination, TourPackage

class DestinationSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Destination
        fields = '__all__'

class TourPackageSerializer(serializers.DocumentSerializer):
    class Meta:
        model = TourPackage
        fields = '__all__'