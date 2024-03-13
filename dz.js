let styles= ['Jazz', 'Blues'];
styles.push('Rock and Roll');
styles.shift(0,1);
styles.unshift('Classic');
styles.unshift('Jazz');
styles.pop();
styles.pop();
styles.push('Rock and roll');
styles.pop();
console.log(styles)
