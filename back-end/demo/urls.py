from django.urls import path,include
from . import views
from rest_framework import routers
from .views import MovieViewSet

router = routers.DefaultRouter()

router.register('',MovieViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
