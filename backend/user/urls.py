from django.urls import path,include
from rest_framework import routers
from .views import UserViewSet, CustomObtainAuthToken,GetUserinfoView,UserProfileViewSet,change_pass


router = routers.DefaultRouter()
router.register('registration',UserViewSet)
router.register('getregisterinfo',GetUserinfoView)
router.register('userprofile',UserProfileViewSet)


urlpatterns = [
    path('',include(router.urls)),
    path('authenticate/', CustomObtainAuthToken.as_view()),
    path('changepass/',change_pass),
]
