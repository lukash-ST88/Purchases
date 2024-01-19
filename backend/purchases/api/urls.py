from django.urls import path, include
from .views import CategoryCreate, PurchaseListCreateView, PurchaseSortedListView, PurchaseFilteredListView, \
    PurchaseRetrieveUpdateDestroy

urlpatterns = [
    path('/', PurchaseListCreateView.as_view(), name="purchases"),
    path('<int:pk>/', PurchaseRetrieveUpdateDestroy.as_view(), name="purchase"),
    path('sorted/<str:sort>/', PurchaseSortedListView.as_view(), name="sorted-purchases"),
    path('category/<int:pk>/', PurchaseFilteredListView.as_view(), name="filtered-purchases"),
    path('add-category/', CategoryCreate.as_view(), name="add-category"),
]
