from rest_framework import routers
from .api import SchoolViewSet

router = routers.DefaultRouter()

router.register('api/schools', SchoolViewSet, 'schools')

urlpatterns = router.urls