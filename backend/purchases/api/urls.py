from django.urls import path, include
from .views import CategoryCreate, PurchaseListView, PurchaseCreateView, PurchaseSortedListView, \
    PurchaseFilteredListView, \
    PurchaseRetrieveUpdateDestroy

urlpatterns = [
    path('', PurchaseListView.as_view(), name="purchases"),
    path('add/', PurchaseCreateView.as_view(), name="add-purchase"),
    path('<int:pk>/', PurchaseRetrieveUpdateDestroy.as_view(), name="purchase"),
    path('sorted/<str:sort>/', PurchaseSortedListView.as_view(), name="sorted-purchases"),
    path('category/<int:pk>/', PurchaseFilteredListView.as_view(), name="filtered-purchases"),
    path('add-category/', CategoryCreate.as_view(), name="add-category"),
]
