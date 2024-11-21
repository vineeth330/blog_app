from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *



urlpatterns = [
     path('posts/', post_list, name='post-list'),
     
     
     
]
