import React, { useState } from 'react'
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      <Button type="submit">Search</Button>
    </form>
  )
}
