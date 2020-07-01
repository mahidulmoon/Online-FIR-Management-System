from django.urls import path,include
from rest_framework import routers
from .views import ThanaViewSet

router = routers.DefaultRouter()
router.register('contact',ThanaViewSet)

urlpatterns = [
    path('',include(router.urls)),
]
