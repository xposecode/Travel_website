from rest_framework import generics
from .models import Destination, TourPackage
from .serializers import DestinationSerializer, TourPackageSerializer

class DestinationList(generics.ListCreateAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

class DestinationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

# Similarly for TourPackage

from django.http import JsonResponse
from mongoengine import connect
import mongoengine

def test_mongodb(request):
    try:
        # Try to connect
        connect('travel_db', host='localhost', port=27017)
        
        # Check connection by listing databases
        from mongoengine.connection import get_connection
        conn = get_connection()
        dbs = conn.list_database_names()
        
        return JsonResponse({
            'status': 'success',
            'message': 'MongoDB connected successfully',
            'databases': dbs
        })
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': str(e)
        }, status=500)
    



# Add this function to your views.py
def test_mongodb(request):
    """Test MongoDB connection"""
    try:
        # Try to connect
        connect('travel_db', host='localhost', port=27017)
        
        # Check connection
        from mongoengine.connection import get_connection
        conn = get_connection()
        dbs = conn.list_database_names()
        
        return JsonResponse({
            'status': 'success',
            'message': 'MongoDB connected successfully',
            'databases': dbs,
            'connection': 'local'
        })
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': str(e),
            'suggestion': 'Make sure MongoDB is running on localhost:27017'
        }, status=500)