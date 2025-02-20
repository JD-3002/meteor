<script>
// Add a node at the end of the list
function append(new_data)
{
	/* 1. allocate node 
	* 2. put in the data */
	var new_node = new Node(new_data);

	var last = head; /* used in step 5*/

	/* 3. This new node is going to be the last node, so
	* make next of it as NULL*/
	new_node.next = null;

	/* 4. If the Linked List is empty, then make the new
	* node as head */
	if (head == null) {
		new_node.prev = null;
		head = new_node;
		return;
	}

	/* 5. Else traverse till the last node */
	while (last.next != null)
		last = last.next;

	/* 6. Change the next of last node */
	last.next = new_node;

	/* 7. Make last node as previous of new node */
	new_node.prev = last;
}

// This code is contributed by Rajput-Ji 
</script>
