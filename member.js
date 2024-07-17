function skillsMember() {
  return {
    skills: [],
    addSkill: function(skill) {
      this.skills.push(skill);
    },
    removeSkill: function(skill) {
      this.skills = this.skills.filter(function(s) {
        return s !== skill;
      });
    },
    getSkills: function() {
      return this.skills;
    }
  };
}