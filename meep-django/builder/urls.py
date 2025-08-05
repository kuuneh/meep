from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),        # root URL pattern for homepage
    path('login/', views.login_view, name='login'),
    # other URLs...
]