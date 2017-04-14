-- Sequence: public.shop_item_id_seq

-- DROP SEQUENCE public.shop_item_id_seq;

CREATE SEQUENCE public.shop_item_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 34
  CACHE 1;
ALTER TABLE public.shop_item_id_seq
  OWNER TO plfyuebkejbsul;

-- Sequence: public.checkout_id_seq

-- DROP SEQUENCE public.checkout_id_seq;

CREATE SEQUENCE public.checkout_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 5
  CACHE 1;
ALTER TABLE public.checkout_id_seq
  OWNER TO plfyuebkejbsul;

-- Sequence: public.subscription_id_seq

-- DROP SEQUENCE public.subscription_id_seq;

CREATE SEQUENCE public.subscription_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 8
  CACHE 1;
ALTER TABLE public.subscription_id_seq
  OWNER TO plfyuebkejbsul;

-- Table: public.checkout

-- DROP TABLE public.checkout;

CREATE TABLE public.checkout
(
  id integer NOT NULL DEFAULT nextval('checkout_id_seq'::regclass),
  name text,
  price integer,
  cart json,
  "time" timestamp without time zone DEFAULT now(),
  CONSTRAINT checkout_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.checkout
  OWNER TO plfyuebkejbsul;

-- Table: public.shop_item

-- DROP TABLE public.shop_item;

CREATE TABLE public.shop_item
(
  id integer NOT NULL DEFAULT nextval('shop_item_id_seq'::regclass),
  name text,
  description text,
  image text,
  quantity integer,
  price integer,
  CONSTRAINT shop_item_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.shop_item
  OWNER TO plfyuebkejbsul;


-- Table: public.subscription

-- DROP TABLE public.subscription;

CREATE TABLE public.subscription
(
  id integer NOT NULL DEFAULT nextval('subscription_id_seq'::regclass),
  name text,
  dinner boolean,
  "time" timestamp without time zone DEFAULT now(),
  CONSTRAINT subscription_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.subscription
  OWNER TO plfyuebkejbsul;
