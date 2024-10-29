function showDetails(product) {
    let details = '';
    if (product === 'product1') {
        details = '<h2>تفاصيل منتج 1</h2><p>وصف المنتج 1 هنا.</p>';
    } else if (product === 'product2') {
        details = '<h2>تفاصيل منتج 2</h2><p>وصف المنتج 2 هنا.</p>';
    }
    // إضافة المزيد من التفاصيل حسب المنتج

    document.getElementById('modal-content').innerHTML = details;
    document.getElementById('product-details').style.display = 'block';
}

function closeDetails() {
    document.getElementById('product-details').style.display = 'none';
}
