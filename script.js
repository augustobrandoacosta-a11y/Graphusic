var cy = cytoscape({
  container: document.getElementById('cy'),

  elements: [
    // NODES
    { data: { id: 'rock', label: 'Rock' }, style: { 'background-color': '#ff5733' } },
    { data: { id: 'pop', label: 'Pop' }, style: { 'background-color': '#33ff57' } },
    { data: { id: 'beatles', label: 'The Beatles' } },
    { data: { id: 'queen', label: 'Queen' } },
    { data: { id: 'swift', label: 'Taylor Swift' } },

    // EDGES
    { data: { source: 'rock', target: 'beatles' } },
    { data: { source: 'rock', target: 'queen' } },
    { data: { source: 'pop', target: 'swift' } }
  ],

  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(label)',
        'color': '#fff',
        'text-valign': 'center',
        'text-halign': 'center',
        'width': 50,
        'height': 50,
        'font-size': '10px',
        'background-color': '#555'
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 2,
        'line-color': '#444',
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#444'
      }
    }
  ],

  layout: {
    name: 'cose', // 'cose' is a "physics" layout that spreads things out nicely
    animate: true
  }
});
