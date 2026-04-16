import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col gap-y-6">
      <span className="text-xl font-bold tracking-wide">{name}</span>
      <div className="flex flex-wrap gap-x-6 gap-y-4">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, Icon} = skill;
  return (
    <div className="flex w-20 flex-col items-center gap-y-1">
      {Icon && <Icon className="h-8 w-8" />}
      <span className="text-center text-sm font-medium">{name}</span>
    </div>
  );
});

Skill.displayName = 'Skill';
