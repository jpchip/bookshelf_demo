# Used to provision!

set -euo pipefail

#### Install some packages needed by later steps

echo -e "\n--- Updating APT and installing packages ---\n"
apt-get update -y
apt-get install -y wget vim curl build-essential python-software-properties make openjdk-7-jdk git zip emacs24-nox screen

#### Set up Postgres

postgres_password='Asdf1234!'

wget -q -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
echo "deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main" >> /etc/apt/sources.list.d/postgresql.list
uniq /etc/apt/sources.list.d/postgresql.list >/tmp/postgresql.list
mv /tmp/postgresql.list /etc/apt/sources.list.d/postgresql.list

apt-get install -y postgresql-9.3 postgresql-contrib postgresql-9.3-postgis-2.1

service postgresql start

sed -i 's/127.0.0.1\/32/0.0.0.0\/0/g' /etc/postgresql/9.3/main/pg_hba.conf
sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/g" /etc/postgresql/9.3/main/postgresql.conf

sudo -u postgres psql -U postgres -d postgres -c "alter user postgres with password '${postgres_password}';"


#### Install Node and NPM

curl -sL --silent https://deb.nodesource.com/setup_6.x | sudo -E bash -  > /dev/null 2>&1
sudo apt-get install -y nodejs > /dev/null 2>&1

cd /vagrant && npm install

### Run Migrations

cd /vagrant && npm run migrate