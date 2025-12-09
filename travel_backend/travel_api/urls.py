from django.urls import path
from .import views

urlpatterns = [
    path('destinations/', views.DestinationList.as_view()),
    path('destinations/<str:id>/', views.DestinationDetail.as_view()),
    path('test-mongodb/', views.test_mongodb, name='test_mongodb'),

]