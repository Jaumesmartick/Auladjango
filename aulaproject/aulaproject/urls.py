from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('student.urls')),
    path('', include('accounts.urls'))
]

#IN CASE WE NEED ADMIN SITE
