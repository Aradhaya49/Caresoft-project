from django.urls import path
from .views import tasks,tasks_detail
from .authviews import login,signup

urlpatterns = [
    path('tasks/',tasks),
    path('tasks/<int:pk>',tasks_detail),

    path('auth/signup/', signup),
    path('auth/login/', login),
]