import React, { useState } from 'react';
import CategorySidebar from './CategorySidebar';
import SubjectTabs     from './SubjectTabs';
import QuizGrid        from './QuizGrid';

export default function QuizCatalog({ categories }) {
  const [catIdx, setCatIdx]     = useState(0);
  const [subjIdx, setSubjIdx]   = useState(0);

  const currentCategory = categories[catIdx];
  const subjects        = currentCategory.subjects;
  const currentSubject  = subjects[subjIdx];

  return (
    <>
      <CategorySidebar
        categories={categories}
        activeIndex={catIdx}
        onSelect={i => { setCatIdx(i); setSubjIdx(0); }}
      />

      <div className="flex-1 flex flex-col p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {currentCategory.name} Quizzes
        </h1>

        <SubjectTabs
          subjects={subjects}
          activeIndex={subjIdx}
          onSelect={setSubjIdx}
        />

        <QuizGrid quizzes={currentSubject.quizzes} />
      </div>
    </>
  );
}
