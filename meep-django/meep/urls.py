from django.urls import path, include
from django.shortcuts import redirect
from django.contrib import admin
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', lambda request: redirect('account_login')),  # Redirect root to allauth login
    path('accounts/', include('allauth.urls')),
    path('', include('builder.urls')),
]