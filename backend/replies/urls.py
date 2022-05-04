from django.urls import path, include
from . import views

urlpatterns = [

    path('', views.get_all_replies),
    path('<int:pk>', views.get_reply_detail)
]