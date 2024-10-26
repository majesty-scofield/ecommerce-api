```toml
name = 'Update Product'
method = 'PUT'
url = 'http://localhost:3000/api/products/2'
sortWeight = 4000000
id = '8296b62e-260a-4cdd-9b18-731be58a320e'

[body]
type = 'JSON'
raw = '''
{
  "name": "Product 1",
  "price": "500"
}'''
```
