require 'date'
require 'octokit'
require 'yaml'

class SSG
  attr_accessor :name, :language, :website, :github, :created_at

  def initialize(hash)
    hash.each { |k, v| instance_variable_set("@#{k}", v) }
    get_missing_info_from_github if @github
  end

  def to_s
    @name
  end

  def maturity
    if @created_at
      days = (Date.today - Date.parse(@created_at))
      years = days / 365.242
      if years < 1
        'less than a year'
      elsif years.round == 1
        'about 1 year'
      else
        "about #{years.round} years"
      end
    end
  end

  private

  def get_missing_info_from_github
    repo = Octokit.repo(@github)
    @created_at ||= repo.created_at
    @github_followers ||= repo.watchers_count
  end
end

YAML.load_file('list.yaml').take(4).each do |hash|
  ssg = SSG.new(hash)
  puts ssg.name
  puts ssg.maturity
end
