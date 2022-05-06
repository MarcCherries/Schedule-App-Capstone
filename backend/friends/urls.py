from django.urls import path, include
from . import views

urlpatterns = [

    path('', views.get_all_friends),
    path('<int:pk>', views.get_friend_by_user)
    ]