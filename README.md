# Resize Handler
## Install
```
bower install resize-handler --save
```

## Example 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="resizeHandler.js"></script>
    <meta charset="UTF-8">
    <title>Resize Handler</title>
</head>
<body>
    <script>
        window.ResizeHandler.register(function() {
            console.log('resize A');
        });
        window.ResizeHandler.register(function() {
            console.log('resize B');
        });
    </script>
</body>
</html>
```
