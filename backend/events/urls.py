from django.urls import path, include
from . import views

urlpatterns = [

    path('', views.get_all_events),
    path('<int:pk>', views.get_event_detail),
    path('user/', views.get_all_events_by_user_id)
    ]