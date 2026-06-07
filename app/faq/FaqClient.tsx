'use client'

import { useState } from 'react'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p>{children}</p>,
  },
  marks: {
    link: ({ children, value }: any) => (
      <Link href={value.href}>{children}</Link>
    ),
  },
}

interface FaqGroup {
  id: string
  category: string
  questions: {
    _id: string
    question: string
    answer: any[]
  }[]
}

export default function FaqClient({ grouped }: { grouped: FaqGroup[] }) {
  const [openItem, setOpenItem] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenItem(openItem === id ? null : id)
  }

  if (grouped.length === 0) {
    return (
      <div className="faq-main">
        <div className="info-box">
          <p>No FAQ items have been published yet — check back soon, or <Link href="/contact">get in touch</Link> if you have a question.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="faq-main">
      {grouped.map(section => (
        <div className="faq-category" id={section.id} key={section.id}>
          <div className="faq-category-label">{section.category}</div>
          {section.questions.map((item) => {
            const isOpen = openItem === item._id
            return (
              <div className="faq-item" key={item._id}>
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => toggle(item._id)}
                >
                  {item.question}
                  <span className="faq-icon">{isOpen ? '×' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer open">
                    <PortableText
                      value={item.answer}
                      components={portableTextComponents}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}