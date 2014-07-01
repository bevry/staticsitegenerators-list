require 'yaml'

task default: %w[test]

task :test do
  # This simply checks that the file is valid YAML syntax. We can add some more
  # checks later if we want (i.e., no duplicate entries).
  YAML.load_file('list.yaml')
end
