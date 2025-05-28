import React from 'react'
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';

export default function AccordionItem({ className, title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Button onClick={() => setOpen(!open)} className={`w-full text-left py-2`}>
        <Heading level={4}>{title}</Heading>
      </Button>
      {open && <Text className={`py-2`}>{content}</Text>}
    </div>
  )
}
