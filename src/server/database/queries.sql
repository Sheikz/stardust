-- Get items bought

select c.id, c.name, item->>'name' from checkout c, json_array_elements(c.cart) as item;