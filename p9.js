// Function to check for path existence and return the path if it exists
function findPath(graph, start, end) {
    // Edge case: If start node is the same as end node
    if (start === end) return { exists: true, path: [start] };

    // Initialize a queue for BFS and a visited set
    const queue = [{ node: start, path: [start] }];
    const visited = new Set();

    while (queue.length > 0) {
        const { node, path } = queue.shift(); // Dequeue the first element

        // Check if we've reached the end node
        if (node === end) {
            return { exists: true, path: path };
        }

        // Mark the current node as visited
        visited.add(node);

        // Enqueue all unvisited neighbors
        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                queue.push({ node: neighbor, path: [...path, neighbor] }); // Append current path
            }
        }
    }

    // If we exhaust the queue without finding the end node
    return { exists: false, path: [] };
}

// Example graph represented as an adjacency list
const graph = {
    A: ['B'],
    B: ['A', 'C', 'D', 'E'],
    C: ['F'],
    D: ['E', 'G'],
    E: ['F'],
    F: ['G','B'],
    G: [],
    H: []
};

// Example test cases
const examples = [
    { start: 'D', end: 'B' }, // Expected output: { exists: false, path: [] }
    { start: 'F', end: 'A' }, // Expected output: { exists: true, path: ['F', 'G', 'D', 'B', 'A'] }
    { start: 'G', end: 'C' }, // Expected output: { exists: false, path: [] }
    { start: 'E', end: 'D' }, // Expected output: { exists: true, path: ['E', 'F', 'G', 'D'] }
];

// Test the examples and log results
examples.forEach(({ start, end }) => {
    const result = findPath(graph, start, end);
    console.log(`Path from ${start} to ${end}: Exists = ${result.exists}, Path = ${result.path.join(' -> ')}`);
});
